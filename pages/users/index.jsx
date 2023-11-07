import { getAllUser } from 'lib/api'
import Hero from 'components/hero'
const params = { title: 'Users', subtitle: 'ユーザー一覧' }
const Users = ({ users }) => {
  return (
    <>
      <Hero {...params} />
     
    </>
  )
}

const getStaticProps = async () => {
   const users = await getAllUser()
   return {
     props : {
       users
     }
   }
 }
 export { getStaticProps }
export default Users