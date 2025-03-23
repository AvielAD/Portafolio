import Image from "next/image"
import Link from "next/link"
const Index = (props: { title: string, subtitle: string, image: { alt: string, url: string }, path: string }) => {
    return (
        <div className="border-solid border-2 rounded-lg ">
            <div className="">
                <div className="flex justify-center">
                    <Link href={`/proyectos/${props.path}`} className="cursor-pointer">
                        <Image src={props.image.url} alt={props.image.alt} className="rounded-t-lg object-contain " width={300} height={300} ></Image>
                    </Link>
                </div>
                <div className="text-center font-sans p-2">
                    <div className="text-2xl font-bold">{props.title}</div>
                    <div>{props.subtitle}</div>
                </div>
            </div>
        </div>
    )
}

export default Index

