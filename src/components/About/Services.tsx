import Google from '/google.png'
import AWS from '/aws.png'
import Supabase from '/supabase.png'
import Firebase from '/firebase.png'
import Postgres from '/sql.png'
import Mongo from '/mongodb.png'

export default function Services() {
    return (
        <div>
            <img src={Google} alt='Google' />
            <img src={AWS} alt='AWS' />
            <img src={Supabase} alt='Supabase' />
            <img src={Firebase} alt='Firebase' />
            <img src={Postgres} alt='Postgres' />
            <img src={Mongo} alt='MongoDB' />
        </div>
    )
}