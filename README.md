# Armoria API

_API for **[Armoria](https://github.com/Azgaar/Armoria)** — procedural heraldry generator and editor._

The API allows to `GET` random or predefined vector and raster heraldic images of a given size in a given format. It also allows to assign a specific coat of arms to a seed value (so called _claiming_).

This branch runs the image API and a Discord `/armoria` command on Netlify. Images are rendered locally, without calls to Heroku or Vercel. Both `/api?format=png&size=400&seed=example` and the original `/png/400/example` routes are supported.

Try it: [YOUR-SITE.netlify.app/?size=500&format=svg&seed=123](https://YOUR-SITE.netlify.app/?size=500&format=svg&seed=123).

Remove seed to generate a random coat or arms: [YOUR-SITE.netlify.app/?size=500&format=svg](https://YOUR-SITE.netlify.app/?size=500&format=svg)

## Netlify deployment

Use the **armoria-api repository root** as the Netlify project root.

1. Use Node 24 and run `npm ci`, `npm test`, then `npm run build:functions` to validate and bundle the functions.
2. Connect this repository to Netlify and select the branch to deploy. A fork can be used to preview changes before they are merged upstream. `netlify.toml` supplies the build command, functions directory, publish directory and routing. The build runs the tests. The image function includes the SVG charges and native PNG renderer.
3. Set `DISCORD_PUBLIC_KEY` in Netlify's environment variables with Functions scope. This is the public key from the Discord application's **General Information** page. Redeploy after changing runtime variables.
4. Optionally set `ARMORIA_API_URL` to `https://YOUR-SITE.netlify.app/api` (or a custom domain). Otherwise the command uses `/api` on Netlify's canonical `URL`.
5. Test `https://YOUR-SITE.netlify.app/api?format=png&size=400&seed=barrulus`. It should return a 400×400 PNG. Also check `/svg/400/barrulus`.

For local API development, run `npm run dev`; the API listens on port 3000 and reads an optional `.env`. `npm start` runs the same API without watch mode. The Discord endpoint is a Netlify Function at `/discord` (also available at `/.netlify/functions/discord`).

Cold starts still need to be measured after deployment. The command returns the image URL immediately, without waiting for PNG generation. Responses are not cached, so omitted seeds remain random and claims remain fresh. Supported formats are SVG and PNG, with sizes from 1 to 2048 pixels. In the examples below, replace `YOUR-SITE.netlify.app` with the actual deployment hostname.

## Discord application setup

The endpoint can serve the existing Discord application if access becomes available, or a new application created at the [Discord Developer Portal](https://discord.com/developers/applications).

1. Create or open the application and copy its **Application ID** and **Public Key**. Set the public key on Netlify as described above.
2. Once deployed, set the application's **Interactions Endpoint URL** to `https://YOUR-SITE.netlify.app/discord`. The handler verifies Discord's Ed25519 signatures, answers its PING, and rejects invalid signatures.
3. Copy `.env.example` to `.env` locally. Set `DISCORD_APPLICATION_ID` and `DISCORD_BOT_TOKEN`. The token is needed only to register the command; the running functions do not need it. Optionally set `DISCORD_GUILD_ID` to register in a test server first.
4. Run `npm run discord:register`. This creates or updates only `/armoria`, preserving other commands. The script prints the installation URL. Open it with an account allowed to add applications to the target server; the `applications.commands` scope is sufficient.
5. Invoke `/armoria seed:barrulus` in Discord. The public response is a direct PNG link using that seed. Seeds must contain 1–100 characters without spaces; punctuation and Unicode are URL-encoded. Discord's image preview may load later or be disabled by client/server settings.

For a global command, omit `DISCORD_GUILD_ID` when registering. If you first registered a guild test command, remove that command through Discord's API when finished so it does not shadow the global command in that server.

There is no persistent Gateway connection and no privileged message-content intent. Registration is a separate manual step, not part of a Netlify build. Do not commit `.env`; the bot token belongs only in your local environment.

References: [Discord interactions](https://docs.discord.com/developers/interactions/overview), [application commands](https://docs.discord.com/developers/interactions/application-commands), and [Express on Netlify](https://docs.netlify.com/build/frameworks/framework-setup-guides/express/).

## Existing claims

Procedural generation works with no credentials. To preserve previously claimed emblems, set `MONGODB_URI` to the existing database connection string; the existing `armoria_api.claims` collection is used. Legacy `MONGO_ID`/`MONGO_PASS` variables remain supported. A configured but unavailable database returns 503 instead of substituting a generated emblem. Existing claims need the original database or a migration; they are not included in this repository. Database migration and live Discord installation are not covered by the local tests.

## Basic usage

#### Parameters

Basic usage is to request coat of arms generation with URL parameters:

> YOUR-SITE.netlify.app/`format`/`size`/`seed`

- **format:** `svg` | `png` | <small>default:</small> `svg`

Armoria generates all images in `svg` by default. But as there are cases where `svg` cannot be used, the tool can convert images to `png`. Raster images quality depends on size, but relatively big images may be slow to get. There can be conversion issues, so `svg` is always preferable.

- **size:** `number` | <small>default:</small> `1200`

Size in pixels, an integer from 1 to 2048, written as `200` or `200px`. For `svg` it sets `width` and `height`; raster images are rescaled and size defines their quality.

- **seed:** `string` | <small>optional</small>

Seed is a string (i.e. `123` is considered as `"123"`) that defines procedural coat of arms generation. The same string will produce the same coat of arms irrespective of size and image format. This statement is only valid if generation code remains the same, so seed must not be used as a saving method.

If `seed` is not provided, the tool generates random 9-digits value. Omit `seed` parameter if you want to get random coat of arms for each request.

`Seed` is getting parsed to lower case, so `Azgaar` will produce the same image as `azgaar`. A few symbols are not supported and getting automatically replaced by underscore (`#`, `'`, ` `).

#### Query attributes

The same parameters (`format`, `size`, `seed`) can be used as query attributes. In this case parameters are not required:

> YOUR-SITE.netlify.app/?`format=svg`&`size=200`&`seed=123456789`

Attributes that are supported only in query format are `coa`, `shield` and colors.

- **coa:** `string` | <small>supersedes `seed`</small>
  - `t1`: field tincture or pattern (fur)
  - `division`: object with `division`, `t` and `line` attributes
  - `ordinaries`: array with `ordinary`, `t`, `line` and `size` attributes
  - `charges`: array with `charge`, `t`, `p`, `size`, `sinister` and `reversed` attributes

API can skip procedural generation and render specific coat of arms (`coa`). Attribute accepts json object [encoded](https://meyerweb.com/eric/tools/dencoder/) for URL usage.

To get coa string open [Armoria GUI](https://github.com/Azgaar/Armoria), edit coat of arms as you want and then click on `Save` → `Copy COA string`. It will copy coa string to your clipboard.

- **shield:** `string` | <small>default:</small> `random`

Armoria supports >40 shield shapes. Any ot them can be used via API if exact names is passed as `shield` attribute. Available shapes:

`heater` | `spanish` | `french` | `horsehead` | `horsehead2` | `polish` | `hessen` | `swiss` | `boeotian` | `roman` | `kite` | `oldFrench` | `renaissance` | `baroque` | `targe` | `targe2` | `pavise` | `wedged` | `round` | `oval` | `vesicaPiscis` | `square` | `diamond` | `no` | `flag` | `pennon` | `guidon` | `banner` | `dovetail` | `gonfalon` | `pennant` | `fantasy1` | `fantasy2` | `fantasy3` | `fantasy4` | `fantasy5` | `noldor` | `gondor` | `easterling` | `erebor` | `ironHills` | `urukHai` | `moriaOrc`

### Custom colors

Armoria has 10 [tinctures](<https://en.wikipedia.org/wiki/Tincture_(heraldry)>) (colors) available by default:

| Tincture | Type   | Represents | Chance | Color                                                                                        |
| -------- | ------ | ---------- | ------ | -------------------------------------------------------------------------------------------- |
| argent   | metal  | silver     | ~25%   | ![argent](https://YOUR-SITE.netlify.app/?format=png&size=16&coa={"t1":"argent"}) #fafafa     |
| or       | metal  | gold       | ~16%   | ![or](https://YOUR-SITE.netlify.app/?format=png&size=16&coa={"t1":"or"}) #ffe066             |
| gules    | colour | red        | ~17%   | ![gules](https://YOUR-SITE.netlify.app/?format=png&size=16&coa={"t1":"gules"}) #d7374a       |
| sable    | colour | black      | ~14%   | ![sable](https://YOUR-SITE.netlify.app/?format=png&size=16&coa={"t1":"sable"}) #333333       |
| azure    | colour | blue       | ~14%   | ![azure](https://YOUR-SITE.netlify.app/?format=png&size=16&coa={"t1":"azure"}) #377cd7       |
| vert     | colour | green      | ~7%    | ![vert](https://YOUR-SITE.netlify.app/?format=png&size=16&coa={"t1":"vert"}) #26c061         |
| purpure  | colour | purple     | ~13%   | ![purpure](https://YOUR-SITE.netlify.app/?format=png&size=16&coa={"t1":"purpure"}) #522d5b   |
| murrey   | stain  | mulberry   | ~1%    | ![murrey](https://YOUR-SITE.netlify.app/?format=png&size=16&coa={"t1":"murrey"}) #85185b     |
| sanguine | stain  | blood red  | ~1%    | ![sanguine](https://YOUR-SITE.netlify.app/?format=png&size=16&coa={"t1":"sanguine"}) #b63a3a |
| tenné    | stain  | tawny      | ~1%    | ![tenné](https://YOUR-SITE.netlify.app/?format=png&size=16&coa={"t1":"tenné"}) #cc7f19       |

It is possible to use custom tinctures or redefine default colors using query attributes.

Exact color can be set as a part of `coa` attribute. You can replace tincture name with color hex code, e.g. turn `{"t1": "azure"}` into hurting-eyes blue with `{"t1": "#0000ff"}`. URL must be encoded, so the link would be like [YOUR-SITE.netlify.app/?coa={%22t1%22:%22%230000ff%22}](https://YOUR-SITE.netlify.app/?coa={%22t1%22:%22%230000ff%22}).

The resulting link is not readable, so you can also define colors using specific attributes for each of them like [YOUR-SITE.netlify.app/svg/500/1?gules=bb1100&or=FFD700&azure=00aaff](https://YOUR-SITE.netlify.app/svg/500/1?gules=bb1100&or=FFD700&azure=00aaff). Hash symbol must be dropped.

## Claiming

A specific coat of arms can be assigned to a value. In this case every time this seed (`name`) is requested, the same claimed coat of arms will be displayed. Assignment is stored in _MongoDB Atlas_ with set (`claim`), update (`reclaim`) and delete (`unclaim`) operations allowed.

This functional can be used to set up a specific heraldic image for your name, country, city or any other word. Claims can be password-protected. For real objects like countries we are planning to set up coat of arms that resemble real ones. Admin users ([Discord community](https://discordapp.com/invite/X7E84HU) members) have rights to update or delete claims it they found them inappropriate.

### Claim

> YOUR-SITE.netlify.app/claim/`name`/`coa`/`key`

- **name:** `string` | <small>non-numerical</small>

Name is a string to be associated with a specific coat of arms, not the one auto-generated by the tool. Once assigned, `name` works as `seed` in its basic usage. Numerical names like `123` are assigned foe procedural generation and cannot be claimed. `Name` is getting parsed the same way as `seed`, so `Armoria API` will be parsed to `armoria_api`.

- **coa:** `string`

Coat of arms object [encoded](https://meyerweb.com/eric/tools/dencoder/) for URL usage. Co copy it open [Armoria GUI](https://github.com/Azgaar/Armoria), edit coat of arms as you want and then click on `Save` → `Copy COA string`. See in details [above](#query-attributes).

- **key:** `string` | <small>optional</small>

User-defined password. If omitted, no password will be set and anyone will be able to change or delete the claim. Password accepts any string. Please make sure you save it locally as there is no way to restore the key if you forget it.

### Reclaim

> YOUR-SITE.netlify.app/claim/`name`/`coa`/`key`

Raclaim updates the record in the database. If the current claim is password-protected, `key` value should be set. If not, it will accept any value or no value.

### Unclaim

> YOUR-SITE.netlify.app/unclaim/`name`/`key`

Unclaim removes the record from the database. For unclaim you need `name` and `key` (if was set on claim), but `coa` is not required.

## Examples

Coat of arms generated for seed `123456789`, rendered in `svg`, size is `400px`:

> [YOUR-SITE.netlify.app/svg/400px/123456789](https://YOUR-SITE.netlify.app/svg/400px/123456789)

Coat of arms generated for seed `Armortown`, rendered in `png`, size is `800`px:

> [YOUR-SITE.netlify.app/png/800/Armortown](https://YOUR-SITE.netlify.app/png/800/Armortown)

Random coat of arms in `png`, size `200`px:

> [YOUR-SITE.netlify.app/png/200](https://YOUR-SITE.netlify.app/png/200)

Coat of arms manually created in Armoria GUI, default format (`svg`) and size (`1200px`):

> [YOUR-SITE.netlify.app/?coa={"t1":"semy_of_lozengePloye-sable-argent-small","division":{"division":"perPale","line":"straight","t":"semy_of_mullet4-sable-argent-small"},"ordinaries":[{"ordinary":"mount","t":"azure"}],"charges":[{"charge":"lymphad","t":"or","p":"e","size":1.7}]}](https://YOUR-SITE.netlify.app/?coa={"t1":"semy_of_lozengePloye-sable-argent-small","division":{"division":"perPale","line":"straight","t":"semy_of_mullet4-sable-argent-small"},"ordinaries":[{"ordinary":"mount","t":"azure"}],"charges":[{"charge":"lymphad","t":"or","p":"e","size":1.7}]})

Coat of arms manually created in Armoria GUI, rendered in `png` with size `200`px:

> [YOUR-SITE.netlify.app/?coa={"t1":"semy_of_lozengePloye-sable-argent-small","division":{"division":"perPale","line":"straight","t":"semy_of_mullet4-sable-argent-small"},"ordinaries":[{"ordinary":"mount","t":"azure"}],"charges":[{"charge":"lymphad","t":"or","p":"e","size":1.7}]}&format=png&size=200](https://YOUR-SITE.netlify.app/?coa={"t1":"semy_of_lozengePloye-sable-argent-small","division":{"division":"perPale","line":"straight","t":"semy_of_mullet4-sable-argent-small"},"ordinaries":[{"ordinary":"mount","t":"azure"}],"charges":[{"charge":"lymphad","t":"or","p":"e","size":1.7}]}&format=png&size=200)

Claim or reclaim name `test` (no password protection):

> [YOUR-SITE.netlify.app/claim/test/{"t1":"gules","charges":[{"charge":"fusil","t":"argent","p":"e","size":1.5}],"shield":"heater"}](https://YOUR-SITE.netlify.app/claim/test/{"t1":"gules","charges":[{"charge":"fusil","t":"argent","p":"e","size":1.5}],"shield":"heater"})

Claim or reclaim name `test2` with password `secret123`:

> [YOUR-SITE.netlify.app/claim/test2/{"t1":"ermine-sable-or","division":{"division":"chevronny","t":"argent"},"shield":"spanish"}/secret123](https://YOUR-SITE.netlify.app/claim/test2/{"t1":"ermine-sable-or","division":{"division":"chevronny","t":"argent"},"shield":"spanish"}/secret123)

Unclaim name `test2` using password `secret123`:

> [YOUR-SITE.netlify.app/unclaim/test2/secret123](https://YOUR-SITE.netlify.app/unclaim/test2/secret123)

## License

The code is distributed under [MIT](https://opensource.org/licenses/MIT).

Simple svg shapes and charges are self-made and available under [CC0](https://creativecommons.org/share-your-work/public-domain/cc0/). Complex charges are historical, svg renders are coming from [WappenWiki](http://wappenwiki.org) and available for non-commercial use under [CC3](https://creativecommons.org/licenses/by-nc/3.0/). Source info is added to svg files. All images are manually optimized by me.
