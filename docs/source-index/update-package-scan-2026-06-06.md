# update-package-scan-2026-06-06

Source package used for this round:
`/Users/barbossa/Desktop/Narture Group/独立站/需求文件:1`

The requested path in `nag 更新提需.txt` is `/Users/barbossa/Desktop/Narture Group/独立站/需求文件/1`, but that path does not exist on disk. The actual source package found and used is the colon path above.

## Scan Summary

| Item | Count / Status |
|---|---:|
| Total files scanned | 92 |
| Image files | 73 |
| DOCX files | 8 |
| Artist directories | 8 |
| PDF / TXT / MD / spreadsheet files | 0 |
| `.DS_Store` files | present, ignored |

## Top-Level Assets

| File | Original Path | Type | Intended Use | Confirmation |
|---|---|---|---|---|
| 空间图片.jpg | /Users/barbossa/Desktop/Narture Group/独立站/需求文件:1/空间图片.jpg | jpg | homepage hero / space image | confirmed by user screenshot and request |
| 关于页图片.jpg | /Users/barbossa/Desktop/Narture Group/独立站/需求文件:1/关于页图片.jpg | jpg | about page image / NAG visual mark | confirmed by package naming |
| 联系我们页.jpg | /Users/barbossa/Desktop/Narture Group/独立站/需求文件:1/联系我们页.jpg | jpg | contact QR image | confirmed by package naming; QR decoded to WeChat URL in prior scan |

## Artist Directories

| Artist Directory | Portrait / Profile Image | Bio DOCX | Product Image Folder | Confirmation |
|---|---|---|---|---|
| 大悲宇宙 | 截屏2026-05-26 16.43.01.png | 大悲宇宙艺术家介绍.docx | 产品照片 | confirmed by folder and file names |
| 单晓明 | 截屏2026-05-26 16.42.05.png | 单晓明艺术家介绍.docx | 产品 | confirmed by folder and file names |
| 刘真辰 | 截屏2026-05-26 16.43.26.png | 刘真辰艺术家介绍.docx | 产品照片 | confirmed by folder and file names |
| 孔宇 | 截屏2026-05-26 16.43.54.png | 孔宇艺术家介绍.docx | 产品照片 | confirmed by folder and file names |
| Jeremie Thircuir | Portrait by Stephen Chow_1_杰瑞米 Jeremie Thircuir_来自小红书网页版.jpg | 杰瑞米艺术家介绍.docx | 产品照片 | confirmed by folder and file names |
| 沈天宇 | desert racing_1_Sean 沈天宇_来自小红书网页版.jpg | 沈天宇艺术家介绍.docx | 产品照片 | confirmed by folder and file names |
| 謝鎮璘 | 截屏2026-05-26 16.41.06.png | 謝鎮璘艺术家介绍.docx | 产品 | confirmed by folder and file names; maps to 谢臻麟 / Xie Zhenlin in site data |

## Product Names Identified From File Names

- 大悲宇宙: 大悲宇宙佛头1jpg, 大悲宇宙佛头2jpg, 大悲宇宙佛头3jpg, 永生蝴蝶, 永生蝴蝶2
- 单晓明: 很烧的蜡烛.（天蓝色）png, 很烧的蜡烛（暖橙色), 很烧的蜡烛（粉红色）, 很能装的盘子(天蓝色), 很能装的盘子(暖橙色）, 很能装的盘子（粉红色）, 能量灯凳（白色), 能量灯凳（粉色）, 花心花瓶
- 刘真辰: PANACEA 122, PANACEA 185, PANACEA 240, PANACEA 265, PANACEA236, PRIPAN01, PRIPAN02, PRIPAN03
- 孔宇: 丹玉摇, 柑玉凝, 海晏瑶, 琥珀流, 翠雾凝
- Jeremie Thircuir: Lotus & Rose, Rose, 南瓜 3 Pumpkin 3, 大姜 Giant Ginger, 好柿花生 Good Things happen, 姜 2 Ginger 2, 朝鲜蓟 1 Artichoke 1, 柠檬 Lemons, 水果拼盘 Fruit Platter, 玉米 Corn, 芦笋 1 Asparagus 1, 苦瓜 Bittergourd, 茄子 1 Eggplant 1, 葫芦 1 Hulu 1, 葫芦 2 Hulu 2, 长葫芦 Snake Gourd
- 沈天宇: Baseball, Belly Man, Belly Man 2, Ceramic Tray, Christmas, Homies, Keep, Punk, Seagull Belly, Sexy ?
- 謝鎮璘 / 谢臻麟: Breathing Color, Gradient, Spark, Mobius

## Confirmed Uses In Front-End

- Homepage hero uses `/sources/branding/space-image.jpg`, copied from `空间图片.jpg`.
- About page uses `/sources/branding/about-image.jpg`, copied from `关于页图片.jpg`.
- Contact page uses `/sources/branding/contact-qr.jpg`, copied from `联系我们页.jpg`.
- Artist profiles and product images in current data are mapped from the artist package folders or existing public copies of the same source material.

## Needs Confirmation

- No real product prices were found in this package; front-end displays `联系询价`.
- Product dimensions, years, and materials are still missing or only series-level.
- Store addresses, phone numbers, opening hours, and maps were not found in this package; stores remain `暂未公布` except for city names.
- Event dates, event locations, event images, and event videos were not found in this package.
- No separate standalone logo file was found; the homepage uses the `NAG` wordmark in the hero and header, while the provided visual assets are used for hero/about/contact imagery.
