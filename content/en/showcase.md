---
title: "Components showcase"
meta_title: "dedo AI | Showcase"
description: "this is meta description"
draft: false

phld_title: This is an awensome placeholder title
phld_text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
phld_text2: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
phld_text3: Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

data1:
  title: "title ctx 1"
  content: "content text 1 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  image: "/images/demo_banner.jpg"
  button:
    enable: true
    label: "Get Involved !"
    link: "https://www.dedoai.org/contacts/"

data2:
   title: "title ctx 2"
   items:
      - title: 'ctx 2 - item 1'
        icon: 'iph.svg'
        text: "ctx 2 - item 1 txt : sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        img: 'image-placeholder.png'
      - title: 'ctx 2 - item 2'
        icon: 'iph.svg'
        text: "ctx 2 - item 2 txt : sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        img: 'image-placeholder.png'
      - title: 'ctx 2 - item 3'
        icon: 'iph.svg'
        text: "ctx 2 - item 3 txt : sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        img: 'image-placeholder.png'


data3:
   title: "title ctx 3"
   items:
      - title: 'ctx 3 - item 1'
        icon: 'iph.svg'
        text: 'ctx 3 - item 1 txt :sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        img: 'image-placeholder.png'
      - title: 'ctx 3 - item 2'
        icon: 'iph.svg'
        text: 'ctx 3 - item 2 txt :sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        img: 'image-placeholder.png'
      - title: 'ctx 3 - item 3'
        icon: 'iph.svg'
        text: 'ctx 3 - item 3 txt :sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        img: 'image-placeholder.png'

final_cta:
    title: 'Join the Revolution'
    text: 'dedoAI is more than a platform; it’s a movement towards a fairer, more transparent data economy. Be part of the change.'
    btn_label: 'Get Involved!'
    btn_link: '#newsletter'

---

{{< wrap >}}
{{< section "generic/hero" "" "1" "main" "pt-0" >}}
{{< section "generic/columns_test" "" "2" "column_test" "" >}}
{{< block "generic/testctx" "data1" "3">}}
{{< block "generic/testctx" "data2" "4">}}
{{< pblock "generic/testctx" "test" "data3" >}}
{{< sblock "generic/testscrtc" "data1" "data1" >}}

{{< /wrap >}}
