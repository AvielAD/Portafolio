import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';

const Page = () => {
    return (
        <>
            <Grid container >

                {
                    infoProyectos.map((item: proyectodto, index: number) => {
                        return (
                            <Grid item key={index} xs={12} md={6} justifyContent="space-around">
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
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
        imagen: { titulo: "LocalFix", url: "/localfix.png"}
    },
    {
        titulo: "Plataforma de formularios inscripción a cursos",
        descripcion: "Generación dinámica de formularios para la gestión de cursos",
        imagen: { titulo: "LocalFix", url: "/atmosfera.png"}

    },
    {
        titulo: "Workline",
        descripcion: "Plataforma que administra los servicios y consumos que se pueden reservar en la disposición de espacios físicos como oficina o cafetería",
        imagen: { titulo: "LocalFix", url: "/workline.png"}

    },
    {
        titulo: "Bot NLP",
        descripcion: "Bot perteneciente a la categoría preguntas - respuestas",
        imagen: { titulo: "LocalFix", url: "/frontbot.png"}

    },
    {
        titulo: "Landing Page Atmosfera",
        descripcion: "Página estática JS,CSS y HTML sin librería de desarrollo",
        imagen: { titulo: "LocalFix", url: "/landingatmosfera.png"}

    },
    {
        titulo: "Landing Page LocalFix",
        descripcion: "Página informativa para proyecto de reparación y asesoría de dispositivos",
        imagen: { titulo: "LocalFix", url: "/landinglocalfix.png"}
    }

]

interface proyectodto {
    titulo: string,
    descripcion: string,
    imagen: icontecnologiadto
}

interface icontecnologiadto {
    titulo: string,
    url: string
}