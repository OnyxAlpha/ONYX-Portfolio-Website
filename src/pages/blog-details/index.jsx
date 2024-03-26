import starwars from '../../assets/starWars.jpg'

export default function BlogDetail() {
    return (
        <>
            <div className="px-80 pt-10">
                <div className="w-full">
                    <h2 className="text-3xl font-medium py-2 font-sans">Post Title</h2>
                   <div className="flex justify-between">
                   <p className="font-sans">Sub Title</p>
                   <p>Date</p>
                   </div>
                </div>
                <hr className='h-0.5 bg-violet-700'/>

                <div>
                    <img src={starwars} className='w-full py-2' alt="Blog Image" />
                </div>

                <div>
                    <p className='text-justify font-sans font-medium py-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi est magni blanditiis corporis sit, nostrum sequi accusamus nobis rerum repellat rem obcaecati sint magnam eligendi, quisquam delectus alias tempore sapiente dolore repellendus. Ipsum vitae iusto eum quisquam dolorum repellendus reprehenderit obcaecati saepe eius reiciendis dicta nobis, consectetur ex, recusandae repudiandae <br/><br/>consequatur deserunt assumenda quos, minus praesentium. Quod veniam tempora labore culpa exercitationem expedita dolores impedit eius laudantium voluptates voluptas facilis, doloribus assumenda iusto? Sequi at expedita esse, eveniet, vel adipisci quibusdam cupiditate ullam inventore sapiente laudant font-sans font-normalium neque veniam voluptas aut? Nemo eligendi ut quia voluptatem vitae fugit ducimus ab, saepe numquam! Voluptatem cumque perspiciatis tenetur architecto molestias quas repudiandae qui consequuntur libero, quidem vitae doloribus similique accusamus laboriosam optio facilis quam atque ad voluptates iste. Officia nesciunt voluptatibus voluptate eos, distinctio deserunt dolores <br/><br/> ullam dolorum suscipit esse doloribus cum hic aut unde pariatur architecto quisquam labore quae repellat aspernatur corrupti eum obcaecati, quod consequuntur? Nostrum, delectus incidunt! Veniam repellat commodi sit dolores voluptatem tenetur! Vel atque cupiditate nisi quisquam, exercitationem deserunt at repudiandae laboriosam dolorem tempora quos, est nihil, quae nostrum? Facilis velit ut nobis quaerat delectus, natus nemo at debitis quisquam quas earum non necessitatibus quis. Iusto aliquid, optio recusandae voluptate earum neque quisquam expedita hic  <br/><br/>dignissimos voluptates assumenda, maxime quia, a deserunt numquam suscipit! Neque aspernatur dignissimos repellendus! Maxime blanditiis, similique modi laborum illum numquam porro voluptates explicabo unde mollitia molestias fugiat ipsum consequatur, hic doloribus minus non vero dicta facilis distinctio! Incidunt reiciendis itaque blanditiis minus ullam obcaecati eum animi qui ab minima voluptatem ex earum veritatis excepturi ipsam, dicta odit mollitia fugiat sint? Qui, animi adipisci. Veritatis, libero! Quod doloremque voluptatibus nulla deleniti eos, fuga aliquam asperiores porro eligendi hic unde corrupti dolor sunt optio. Magnam quae quis labore quo est soluta maxime non? Repellendus, cum.</p>
                </div>
            </div>
        </>
    );
};