import BillBoard from '@/components/BillBoard'
import MovieList from '@/components/MovieList'
import Navbar from '@/components/Navbar'

export default function Home() {
    return (
        <>
            <Navbar />
            <BillBoard />
            <div className="pb-40" >
                <MovieList />
            </div>
        </>
    )

}