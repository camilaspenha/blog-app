export type single= {
  id:number | string | null,
  post_img:string,
  post_date:string,
  title:string,
  content:string,
  post_author:{
    name:string,
    img:string,
    description:string
  },
  post_category:string
  post_content:{
    paragraf_1:string,
    quote:string,
    paragraf_2:string,
    subtitle:string,
    paragraph_3:string,
    inside_img:string,
    subtitle_2:string,
    paragraph_4:string,
    paragraph_5:string
  },
  tags:string[],
}
