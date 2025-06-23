---
layout: page
title: Search Schemes
subtitle: Web tool - Analysing Search Schemes
permalink: /search_schemes/
header:
  overlay_image: /assets/images/overlay/getting_started.jpg
categories: [official, wip]
---

<button id="iframe_search_schemes_fullscreen">Run full screen</button>
<iframe id="iframe_search_schemes" src="/assets/web_search_schemes/index.html" style="--margin: 10px; margin: var(--margin); width: calc(100vw - 3px - var(--margin) * 2); min-height: 50vh; border: 0px; position: relative; left: calc(-50vw + 964px / 2);border: 1px solid black; border-radius:15px; background: white;">
</iframe>

<script type="text/javascript">
    let buttontag = document.getElementById('iframe_search_schemes_fullscreen');
    let iframetag = document.getElementById('iframe_search_schemes');
    buttontag.onclick = (event) => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
            return;
        }
        iframetag.requestFullscreen();
    }
</script>
