'use client'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';


const Page = () => {
    const clickHandle= (url: string)=>{
        document.location.href = url
    }
    return (
        <>
            <Grid container direction="row" spacing={3}>

                {
                    infoProyectos.map((item: proyectodto, index: number) => {
                        return (
                            <Grid item key={index} xs={12} md={4} sm={12} direction="row" justifyContent="center">
                                <Card sx={{height: "100%"}}>
                                    <CardActionArea onClick={()=> clickHandle(item.link)}>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={item.imagen.url}
                                            alt={item.imagen.titulo}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {item.titulo}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {item.descripcion}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>

                        )
                    })
                }
            </Grid>


        </>
    )
}

export default Page

const infoProyectos: Array<proyectodto> = [
    {
        titulo: "LocalFix",
        descripcion: "Este proyecto gestiona el historial e impresión de tickets para talleres de celulares y computadoras",
        imagen: { titulo: "LocalFix", url: "/localfix.png"},
        link: 'https://localfix.mx'
    },
    {
        titulo: "Plataforma de formularios inscripción a cursos",
        descripcion: "Generación dinámica de formularios para la gestión de cursos",
        imagen: { titulo: "LocalFix", url: "/atmosfera.png"},
        link: 'https://dev.atmosfera.la/login'
    },
    {
        titulo: "Workline",
        descripcion: "Plataforma que administra los servicios y consumos que se pueden reservar en la disposición de espacios físicos como oficina o cafetería",
        imagen: { titulo: "LocalFix", url: "/workline.png"},
        link: 'https://dev.atmosfera.la/login'
    },
    {
        titulo: "Bot NLP",
        descripcion: "Bot perteneciente a la categoría preguntas - respuestas",
        imagen: { titulo: "LocalFix", url: "/frontbot.png"},
        link: 'https://frontbot.vercel.app/'
    },
    {
        titulo: "Landing Page Atmosfera",
        descripcion: "Página estática JS,CSS y HTML sin librería de desarrollo",
        imagen: { titulo: "LocalFix", url: "/landingatmosfera.png"},
        link: 'https://dev.atmosfera.la/'
    },
    {
        titulo: "Landing Page LocalFix",
        descripcion: "Página informativa para proyecto de reparación y asesoría de dispositivos",
        imagen: { titulo: "LocalFix", url: "/landinglocalfix.png"},
        link: 'https://localfix.mx'
    }

]

interface proyectodto {
    titulo: string,
    descripcion: string,
    imagen: icontecnologiadto,
    link: string
}

interface icontecnologiadto {
    titulo: string,
    url: string
}