import Image from "next/image"

const ImagesSkills = [
    {
        uri: "/assets/skills/dotnet.svg",
        alt: "sin imagen"
    },
    {
        uri: "/assets/skills/nextjs.svg",
        alt: "sin imagen"
    },
    {
        uri: "/assets/skills/postgresql.svg",
        alt: "sin imagen"
    },
    {
        uri: "/assets/skills/reactjs.svg",
        alt: "sin imagen"
    },
    {
        uri: "/assets/skills/typescript.svg",
        alt: "sin imagen"
    },
    {
        uri: "/assets/skills/nodejs.svg",
        alt: "sin imagen"
    },
    {
        uri: "/assets/skills/electronjs.svg",
        alt: "sin imagen"
    },
    {
        uri: "/assets/skills/vite.svg",
        alt: "sin imagen"
    },
]

const Index = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-8">
                {
                    ImagesSkills.map((item, index) => (
                        <div key={index} className="flex justify-center">
                            <Image key={index} 
                            width={100}
                            height={100}
                            src={item.uri}  
                            alt={item.alt}></Image>
                        </div>

                    ))
                }
            </div>

        </div>
    )
}

export default Index