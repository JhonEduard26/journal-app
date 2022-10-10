import { fileUpload } from '../../src/helpers/fileUpload'

jest.setTimeout(10000)

describe('pruebas en fileUpload', () => {
  test('debe de subir el archivo a cloudinary correctamente', async () => {

    const imageUrl = 'https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067__340.png'

    const resp = await fetch(imageUrl)
    const blob = await resp.blob()
    const file = new File([blob], 'foto.jpg')
    const url = await fileUpload(file)

    expect(typeof url).toBe('string')
  })
})