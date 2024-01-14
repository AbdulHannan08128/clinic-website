import Form from './Form'

export default function page() {
  return (
    <>
    <Form KEY={process.env.key} URL={process.env.adminUrl}/>
    </>
  )
}
