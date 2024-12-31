require('dotenv').config()
const axios = require('axios')
const FormData = require('form-data')
const fs = require('fs')

async function sendTemplateMessage() {
    const response = await axios({
        url: 'https://graph.facebook.com/v20.0/433754449831240/messages',
        method: 'post',
        headers: {
            'Authorization': `Bearer ${process.env.WHATSAPP_TOKEN}`,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            messaging_product: 'whatsapp',
            to: '6285219370971',
            type: 'template',
            template: {
                name: 'reminder_payment_id',
                language: {
                    code: 'id'
                },
                components: [
                    // {
                    //     type: 'header',
                    //     parameters: [
                    //         {
                    //             type: 'text',
                    //             text: 'John Doe'
                    //         }
                    //     ]
                    // },
                    {
                        type: 'body',
                        parameters: [
                            {
                                type: 'text',
                                text: 'Moch. Nasheh Annafii'
                            },
                            {
                                type: 'text',
                                text: '402019611018'
                            },
                            {
                                type: 'text',
                                text: 'Teknik Informatika'
                            },
                            {
                                type: 'text',
                                text: '8.850.000'
                            },
                            {
                                type: 'text',
                                text: '17 Juli 2024'
                            },
                            {
                                type: 'text',
                                text: '123123123123'
                            },
                        ]
                    },
                    {
                        type: 'button',
                        sub_type: 'URL',
                        index: 0, // tombol index ke
                        parameters: [
                            {
                                type: 'text',
                                text: "tes"
                            }
                        ]
                    },

                ]
            }
        })
    })

    console.log(response.data)
}

async function sendTextMessage() {
    const response = await axios({
        url: 'https://graph.facebook.com/v20.0/433754449831240/messages',
        method: 'post',
        headers: {
            'Authorization': `Bearer ${process.env.WHATSAPP_TOKEN}`,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            messaging_product: 'whatsapp',
            to: '6285219370971',
            type: 'text',
            text: {
                body: 'This is a text message'
            }
        })
    })

    console.log(response.data)
}

async function sendMediaMessage() {
    const response = await axios({
        url: 'https://graph.facebook.com/v20.0/433754449831240/messages',
        method: 'post',
        headers: {
            'Authorization': `Bearer ${process.env.WHATSAPP_TOKEN}`,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            messaging_product: 'whatsapp',
            to: '6285219370971',
            type: 'image',
            image: {
                //link: 'https://dummyimage.com/600x400/000/fff.png&text=manfra.io',
                id: '482134998318309',
                caption: 'This is a media message'
            }
        })
    })

    console.log(response.data)
}

async function uploadImage() {
    const data = new FormData()
    data.append('messaging_product', 'whatsapp')
    data.append('file', fs.createReadStream(process.cwd() + '/logo.png'), { contentType: 'image/png' })
    data.append('type', 'image/png')

    const response = await axios({
        url: 'https://graph.facebook.com/v20.0/phone_number_id/media',
        method: 'post',
        headers: {
            'Authorization': `Bearer ${process.env.WHATSAPP_TOKEN}`
        },
        data: data
    })

    console.log(response.data)
}

// sendTemplateMessage()

sendTextMessage()

// sendMediaMessage()

// uploadImage()