export default {

    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
        {
            name: 'name', // name of person leaving testimonial
            title: 'Name',
            type: 'string',
        },
        {
            name: 'company', // the person leaving the testimonial's company 
            title: 'Company',
            type: 'string',
        },
        {
            name: 'imageurl', 
            title: 'ImgURL',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'feedback',  
            title: 'Feedback',
            type: 'string',
        }
    ],
}