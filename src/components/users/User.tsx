import style from './User.module.css'

type UserRow = {
  name: string
}

type UserProps = {
  data: UserRow
}

const User = ({ data }: UserProps) => (
  <div className={style.user}>
    {data?.name}
    <hr />
  </div>
)

export default User
