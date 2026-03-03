+++
title = 'Announcing PartParse'
description = "Forward a PDF, get structured quote data back in seconds"
date = 2026-03-03
image = "partparse-homepage.png"
draft = false
keywords = 'partparse,rfq,manufacturing,ai,machine shop,quoting'
+++

Every machine shop I've talked to loses a surprising amount of time at the quoting desk.

RFQs show up as PDFs, sometimes clean, sometimes a mess of tables and line items spread across a dozen pages. Before anyone can even think about pricing a job, somebody has to sit there and pull out every part number, quantity, material callout, tolerance, and due date by hand. Then type it all into the ERP. Then probably type it somewhere else too. Mistakes happen constantly because the work is mind-numbing.

So I built [PartParse](https://partparse.com?utm_source=benterova.com&utm_medium=website&utm_campaign=blog).

You forward a PDF. PartParse reads through it, extracts all the relevant data, and gives you back clean, structured output in seconds. Part numbers, quantities, materials, revisions, deadlines. The stuff that used to take 20 minutes of squinting at a buyer's spreadsheet.

Then you decide where it goes. Export straight to **JobBOSS** or **ProShop**, grab a **CSV**, or fire a **webhook** into whatever system you've already got running. The data gets entered once, and you didn't have to be the one entering it.

The whole flow looks like this:

1. Forward your RFQ to PartParse
2. Review the parsed data in the dashboard
3. Export to your ERP, download a CSV, or trigger a webhook

Setup takes about five minutes. If you can forward an email, you can use it.

I've been running this with a handful of shops and they all say the same thing: it saves them a bunch of time on the least interesting part of their day. That's all I was going for.

Check it out at [partparse.com](https://partparse.com?utm_source=benterova.com&utm_medium=website&utm_campaign=blog).
