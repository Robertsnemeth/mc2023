import { Http2ServerRequest } from 'http2'
import { useState } from 'react'

type Props = {}

function Header () {

    const [size, setSize ] = useState(["XS", "S", "M", "L", "XL", "2XL", "3XL"])

    return (
        <nav className="pb-2 flex flex-col gap-2">
            <section className="flex justify-between">
                <div className='flex flex-col '>
                    <h1 className="text-green-500 font-bold text-2xl">Edgeworks Member Challange</h1>
                    <h2>Earn Your Peaks: Challenge List 2023 | <span className='font-bold'>TACOMA</span></h2>
                </div>
                <div className='flex flex-col'>
                    <h2 className="font-bold text-2xl">Bobby Nemeth</h2>
                    <div className="flex gap-3">
                        {size.map((size, index) => (<button className="hover:bg-green-500 hover:rounded-full hover:text-white p-2" key={size}>{size}</button>))}
                    </div>
                    <h2 className="text-sm text-center">(Please select a T-Shift size from above)</h2>
                </div>
            </section>
            <section className="flex">
                <label>Achievements:</label>
                <input type="text" className="border-b-2 border-black w-full" />
            </section>
            <section className = "flex gap-10">
                <div className="flex gap-2 font-bold">
                    <label className="text-orange-400">First Peak: 65 Points</label>
                    <input type="checkbox" />
                </div>
                <div className="flex gap-2 font-bold">
                    <label className="text-blue-400">Second Peak: 100 Points</label>
                    <input type="checkbox" />
                </div>
                <div className="flex gap-2 font-bold">
                    <label className="text-green-500">Third Peak: 150 Points</label>
                    <input type="checkbox" />
                </div>
            </section>
            <footer className="bg-green-500 text-white text-center my-5 p-3">
                <p className="text-sm">CHALLENGE ETTIQUETTE: Keep it fun. Keep it friendly. Always be respectful of other people's personal space and maintain proper climbing gym etiquette</p>
            </footer>
        </nav>
    )
}

export default Header