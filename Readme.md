
# PMS Pantone® Color Chart <sup>0.0.3</sup>

Find the nearest PMS color using hex or rgb colors from command line or as a dependency.  No need to use Photoshop anymore!

![PMS Pantone Color Chart RGB CMYK Hex Matching](https://d33304ifi1rp4s.cloudfront.net/img/pms-pantone-color-chart-matching.png "PMS Pantone Color Chart RGB CMYK Hex Matching")

Interested in buying a physical Pantone® color formula guide?<br />
[Pantone GP1301XR Formula Guide Solid Coated and Solid Uncoated](http://www.amazon.com/gp/product/B007X7W3P8/ref=as_li_qf_sp_asin_tl?ie=UTF8&tag=aell-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=B007X7W3P8")

## Install

```bash
npm install -g pantone
```


## CLI

Let's try to find the nearest PMS color to [Teelaunch's][2] blue in hex:

![Teelaunch Logo](https://d33304ifi1rp4s.cloudfront.net/img/teelaunch-logo.png "Teelaunch Logo")

```bash
pantone --hex 2A70AE
```

Or we could use the rgb values:

```bash
pantone --rgb 42,112,174
```

Output in table format on command line:

```bash
┌───────┬─────────────────┬────┬─────┬─────┬────────┐
│ dist  │ name            │ r  │ g   │ b   │ hex    │
├───────┼─────────────────┼────┼─────┼─────┼────────┤
│ 0     │ Your query      │ 42 │ 112 │ 174 │ 2A70AE │
├───────┼─────────────────┼────┼─────┼─────┼────────┤
│ 0.023 │ 660             │ 66 │ 107 │ 186 │ 426BBA │
├───────┼─────────────────┼────┼─────┼─────┼────────┤
│ 0.037 │ 2728            │ 51 │ 66  │ 181 │ 3342B5 │
├───────┼─────────────────┼────┼─────┼─────┼────────┤
│ 0.042 │ 285             │ 26 │ 117 │ 207 │ 1A75CF │
├───────┼─────────────────┼────┼─────┼─────┼────────┤
│ 0.046 │ 7455            │ 77 │ 89  │ 171 │ 4D59AB │
├───────┼─────────────────┼────┼─────┼─────┼────────┤
│ 0.05  │ 653             │ 54 │ 87  │ 140 │ 36578C │
├───────┼─────────────────┼────┼─────┼─────┼────────┤
│ 0.053 │ 7459            │ 71 │ 153 │ 181 │ 4799B5 │
├───────┼─────────────────┼────┼─────┼─────┼────────┤
│ 0.055 │ 641             │ 0  │ 120 │ 173 │ 0078AD │
├───────┼─────────────────┼────┼─────┼─────┼────────┤
│ 0.056 │ 307             │ 0  │ 120 │ 171 │ 0078AB │
├───────┼─────────────────┼────┼─────┼─────┼────────┤
│ 0.057 │ 647             │ 38 │ 87  │ 135 │ 265787 │
├───────┼─────────────────┼────┼─────┼─────┼────────┤
│ 0.058 │ 7462            │ 13 │ 92  │ 145 │ 0D5C91 │
├───────┼─────────────────┼────┼─────┼─────┼────────┤
│ 0.064 │ Process Blue 2X │ 0  │ 119 │ 191 │ 0077BF │
├───────┼─────────────────┼────┼─────┼─────┼────────┤
│ 0.064 │ 801 2X          │ 0  │ 137 │ 175 │ 0089AF │
├───────┼─────────────────┼────┼─────┼─────┼────────┤
│ 0.064 │ 3015            │ 0  │ 102 │ 158 │ 00669E │
├───────┼─────────────────┼────┼─────┼─────┼────────┤
│ 0.065 │ 7468            │ 0  │ 121 │ 156 │ 00789C │
├───────┼─────────────────┼────┼─────┼─────┼────────┤
│ 0.066 │ 314             │ 0  │ 133 │ 161 │ 0085A1 │
├───────┼─────────────────┼────┼─────┼─────┼────────┤
│ 0.066 │ 633             │ 0  │ 128 │ 158 │ 00809E │
├───────┼─────────────────┼────┼─────┼─────┼────────┤
│ 0.066 │ 2945            │ 0  │ 87  │ 166 │ 0057A6 │
├───────┼─────────────────┼────┼─────┼─────┼────────┤
│ 0.07  │ 7473            │ 54 │ 163 │ 145 │ 36A391 │
├───────┼─────────────────┼────┼─────┼─────┼────────┤
│ 0.071 │ 640             │ 0  │ 140 │ 186 │ 008CBA │
└───────┴─────────────────┴────┴─────┴─────┴────────┘
```


## Dependency

**1.** Install npm module:

```bash
cd ~/project
npm install pantone
```

**2.** Require and lookup color:

```js

var pantone = require('pantone')

// rgb usage

pantone({ r: 42, g: 112, b: 174 }, rgbCallback)

function rgbCallback(err, results) {
  if (err) throw new Error(err)
  console.log(results)
}

// hex usage

pantone({ hex: '#2A70AE' }, hexCallback) // you can also use `rgb` instead of `hex`

function hexCallback(err, results) {
  if (err) throw new Error(err)
  console.log(results)
}
```


## Notice

PANTONE® and other Pantone, Inc. trademarks are the property of [Pantone, Inc.][1]

[1]: http://www.pantone.com/
[2]: https://teelaunch.com

![Amazon Associate Network](http://www.assoc-amazon.com/e/ir?t=aell-20&l=as2&o=1&a=B007X7W3P8 "")
