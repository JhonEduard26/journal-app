export const fileUpload = async (file) => {
  if (!file) throw new Error('File doesn\'t exists')
  const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/dmwa2i3mk/upload'

  const formData = new FormData()
  formData.append('upload_preset', 'fkkajaql')
  formData.append('file', file)

  try {

    const resp = await fetch(cloudinaryUrl, {
      method: 'POST',
      body: formData
    })
    if (!resp.ok) throw new Error('Upload img failed!')
    const cloudData = await resp.json()
    return cloudData
  } catch (error) {
    throw new Error(error.message)
  }

}