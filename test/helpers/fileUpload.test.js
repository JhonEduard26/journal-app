import { v2 as cloudinary } from 'cloudinary'
import { fileUpload } from '../../src/helpers/fileUpload'

jest.setTimeout(10000)

cloudinary.config({
  cloud_name: 'dmwa2i3mk',
  api_key: '616726692584641',
  api_secret: 'PjVOjyn-mT-xAPp0dNFWGUE-e1w',
  secure: true
});

describe('pruebas en fileUpload', () => {
  test('debe de subir el archivo a cloudinary correctamente', async () => {

    const imageUrl = 'https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067__340.png'

    const resp = await fetch(imageUrl)
    const blob = await resp.blob()
    const file = new File([blob], 'foto.jpg')
    const url = await fileUpload(file)

    expect(typeof url).toBe('string')

    const segments = url.split('/')
    const imageId = segments.at(-1).replace('.png', '')

    await cloudinary.api
      .delete_resources(imageId)
  })
})