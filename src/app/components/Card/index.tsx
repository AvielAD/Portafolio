import Image from "next/image"
const Index = (props: { title: string, subtitle: string, image: { alt: string, url: string }, path: string, url: string }) => {
    return (
        <div className="relative w-96 h-96 shadow-lg rounded-lg ">
            <div className="h-full">
                <div className="relative h-4/5 pt-2">
                    <Image src={props.image.url} alt={props.image.alt} className="rounded-t-lg" fill></Image>
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

