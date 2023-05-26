import type { NextPage } from 'next'
import useSWR from 'swr'
import axios from '@/libs/axios'

const Hello: NextPage = () => {
    const { data, error } = useSWR('/hello', () =>
        axios
            .get('/hello')
            .then((res: any) => res.data)
    )

    if (error) return <div>エラーが発生しました</div>
    if (!data) return <div>読み込み中</div>
    return (
        <div>
            <h1>ようこそ</h1>
            <p>{data}</p>
        </div>
    )
}

export default Hello
