# Armoria API

_API for **[Armoria](https://github.com/Azgaar/Armoria)** — procedural heraldry generator and editor._

The API allows to `GET` random or predefined vector and raster heraldic images of a given size.

API is hosted on _Heroku_ for free, so downtime and slow first response are expected. I will consider scaling in case of active API usage. Please [contact me directly](mailto:maxganiev@yandex.com) if you want to use this API for your projects.

![example1](https://armoria.herokuapp.com/png/100.0001)
![example2](https://armoria.herokuapp.com/png/100.0002)
![example3](https://armoria.herokuapp.com/png/100.0003)
![example4](https://armoria.herokuapp.com/png/100.0004)
![example5](https://armoria.herokuapp.com/png/100.0005)

Try it: [armoria.herokuapp.com/?size=500&format=svg&seed=123](https://armoria.herokuapp.com/?size=500&format=svg&seed=123).

Remove seed to generate random coat or arms: [armoria.herokuapp.com/?size=500&format=svg](https://armoria.herokuapp.com/?size=500&format=svg)

## Usage

#### Parameters

Basic usage is to request coat of arms generation with URL parameters:

> armoria.herokuapp.com/`format`/`size`/`seed`

* **format:** `svg` | `png` | `jpg` | <small>default:</small> `svg`

Armoria generates all images in `svg` by default. But as there are cases where `svg` cannot be used, the tool can convert images to `png` and `jpg`. Raster images quality depends on size, but relatively big images may be slow to get. There can be also conversion issues, so `svg` is preferable.

The main differences between `png` and `jpg` (also known as `jpeg`) are that `png` is lossless format and it supports transparency, while `jpg` is more compressed and has solid background. Out of this two  I would recommend to use `png`.

* **size:** `number` | <small>default:</small> `500`

Size in pixels. Can be any number set as `200` or `200px`. For `svg` it just sets `width` and `height`, raster images are getting actually rescaled and it defines their quality and file size.

* **seed:** `string` | <small>optional</small>

Seed is a string (i.e. `123` is considered as `"123"`) that defines procedural coat of arms generation. The same string will produce the same coat of arms irrespective of size and image format. This statement is only valid if generation code remains the same, so seed must not be used as a saving method.

If `seed` is not provided, the tool generates random 9-digits value. Omit `seed` parameter if you want to get random coat of arms for each request.

#### Query attributes

The same parameters (`format`, `size`, `seed`) can be used as query attributes. In this case parameters are not required:

> armoria.herokuapp.com/?`format=svg`&`size=200`&`seed=123456789`

Attributes that are supported only in query format are `coa` and `shield`.

* **coa:** `json` | <small>supersedes `seed`</small>
  * `t1`: field tincture or pattern (fur)
  * `division`: object with `division`, `t` and `line` attributes
  * `ordinaries`: array with `ordinary`, `t`, `line` and `size` attributes
  * `charges`: array with `charge`, `t`, `p`, `size`, `sinister` and `reversed` attributes

API can skip procedural generation and render specific coat of arms (`coa`). Attribute accepts json object, [encoded](https://meyerweb.com/eric/tools/dencoder/) for URL usage. The value can be retrieved from Armoria GUI: edit coat of arms as you wish and press `Shape` to get its URL. Then copy coa attribute and use as query attribute for API rendering and embedding.

* **shield:** `string` | <small>default:</small> `random`

Armoria supports >40 shield shapes. Any ot them can be used via API if exact names is passed as `shield` attribute. Available shapes: 

`heater` | `spanish` | `french` | `horsehead` | `horsehead2` | `polish` | `hessen` | `swiss` | `boeotian` | `roman` | `kite` | `oldFrench` | `renaissance` | `baroque` | `targe` | `targe2` | `pavise` | `wedged` | `round` | `oval` | `vesicaPiscis` | `square` | `diamond` | `no` | `flag` | `pennon` | `guidon` | `banner` | `dovetail` | `gonfalon` | `pennant` | `fantasy1` | `fantasy2` | `fantasy3` | `fantasy4` | `fantasy5` | `noldor` | `gondor` | `easterling` | `erebor` | `ironHills` | `urukHai` | `moriaOrc`

### Custom colors

Armoria has 10 [tinctures](https://en.wikipedia.org/wiki/Tincture_(heraldry)) (colors) available by default:

| Tincture | Type   | Сhance | Color                                                                                      |
|----------|--------|--------|--------------------------------------------------------------------------------------------|
| argent   | metal  |  ~25%  |![argent](https://armoria.herokuapp.com/?format=png&size=16&coa={"t1":"argent"}) #fafafa    |
| or       | metal  |  ~16%  |![or](https://armoria.herokuapp.com/?format=png&size=16&coa={"t1":"or"}) #ffe066            |
| gules    | colour |  ~17%  |![gules](https://armoria.herokuapp.com/?format=png&size=16&coa={"t1":"gules"}) #d7374a      |
| sable    | colour |  ~14%  |![sable](https://armoria.herokuapp.com/?format=png&size=16&coa={"t1":"sable"}) #333333      |
| azure    | colour |  ~14%  |![azure](https://armoria.herokuapp.com/?format=png&size=16&coa={"t1":"azure"}) #377cd7      |
| vert     | colour |  ~7%   |![vert](https://armoria.herokuapp.com/?format=png&size=16&coa={"t1":"vert"}) #26c061        |
| purpure  | colour |  ~13%  |![purpure](https://armoria.herokuapp.com/?format=png&size=16&coa={"t1":"purpure"}) #522d5b  |
| murrey   | stain  |  ~1%   |![murrey](https://armoria.herokuapp.com/?format=png&size=16&coa={"t1":"murrey"}) #85185b    |
| sanguine | stain  |  ~1%   |![sanguine](https://armoria.herokuapp.com/?format=png&size=16&coa={"t1":"sanguine"}) #b63a3a|
| tenné    | stain  |  ~1%   |![tenné](https://armoria.herokuapp.com/?format=png&size=16&coa={"t1":"tenné"}) #cc7f19      |

It is possible to use custom tinctures or redefine default colors using query attributes.

Exact color can be set as a part of `coa` attribute. You can replace tincture name with color hex code, e.g. turn `{"t1": "azure"}` into hurting-eyes blue with `{"t1": "#0000ff"}`. URL must be encoded, so the link would be like [armoria.herokuapp.com/?coa={%22t1%22:%22%230000ff%22}](https://armoria.herokuapp.com/?coa={%22t1%22:%22%230000ff%22}).

The resulting link is not readable, so you can also define colors using specific attributes for each of them like [armoria.herokuapp.com/svg/500/1?gules=bb1100&or=FFD700&azure=00aaff](https://armoria.herokuapp.com/svg/500/1?gules=bb1100&or=FFD700&azure=00aaff). Hash symbol must be dropped.

## Examples

Coat of arms generated for seed `123456789`, rendered in `svg`, size is `400px`:
> [armoria.herokuapp.com/svg/400px/123456789](https://armoria.herokuapp.com/svg/400px/123456789)

Coat of arms generated for seed `Armortown`, rendered in `jpg`, size is `800`px:
> [armoria.herokuapp.com/jpg/800/Armortown](https://armoria.herokuapp.com/jpg/800/Armortown)

Random coat of arms in `png`, size `200`px:
> [armoria.herokuapp.com/png/200](https://armoria.herokuapp.com/png/200)

Coat of arms manually created in Armoria GUI, default format (`svg`) and size (`500px`):
> [armoria.herokuapp.com/?coa={"t1":"semy_of_lozengePloye-sable-argent-small","division":{"division":"perPale","line":"straight","t":"semy_of_mullet4-sable-argent-small"},"ordinaries":[{"ordinary":"mount","t":"azure"}],"charges":[{"charge":"lymphad","t":"or","p":"e","size":1.7}]}](https://armoria.herokuapp.com/?coa={"t1":"semy_of_lozengePloye-sable-argent-small","division":{"division":"perPale","line":"straight","t":"semy_of_mullet4-sable-argent-small"},"ordinaries":[{"ordinary":"mount","t":"azure"}],"charges":[{"charge":"lymphad","t":"or","p":"e","size":1.7}]})

Coat of arms manually created in Armoria GUI, rendered in `png` with size `200`px:
> [armoria.herokuapp.com/?coa={"t1":"semy_of_lozengePloye-sable-argent-small","division":{"division":"perPale","line":"straight","t":"semy_of_mullet4-sable-argent-small"},"ordinaries":[{"ordinary":"mount","t":"azure"}],"charges":[{"charge":"lymphad","t":"or","p":"e","size":1.7}]}&format=png&size=200](https://armoria.herokuapp.com/?coa={"t1":"semy_of_lozengePloye-sable-argent-small","division":{"division":"perPale","line":"straight","t":"semy_of_mullet4-sable-argent-small"},"ordinaries":[{"ordinary":"mount","t":"azure"}],"charges":[{"charge":"lymphad","t":"or","p":"e","size":1.7}]}&format=png&size=200)

## License

The code is distributed under [MIT](https://opensource.org/licenses/MIT).

Simple svg shapes and charges are self-made and available under [CC0](https://creativecommons.org/share-your-work/public-domain/cc0/). Complex charges are historical, svg renders are coming from [WappenWiki](http://wappenwiki.org) and available for non-commercial use under [CC3](https://creativecommons.org/licenses/by-nc/3.0/). Source info is added to svg files as a comment.

All images are manually optimized by me.