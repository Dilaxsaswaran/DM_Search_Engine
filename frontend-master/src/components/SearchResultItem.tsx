import { useState } from "react"
import { Link } from "react-router-dom"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Divider from "@mui/material/Divider"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"

export default function SearchResultItem({ result: { _source: result } }: any) {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                >
                </Typography>
                <Typography variant="h5" component="div">
                    {result.song_name}
                </Typography>
                <Divider sx={{ height: 3, m: 0.3 }} orientation="horizontal" />
                <Typography sx={{ mb: 0.0 }} color="text.secondary">
                    Album: {result.album} ({result.year})
                </Typography>
                <Typography sx={{ mb: 0.0 }} color="text.secondary">
                    Music By: {result.composer}
                </Typography>
                <Typography sx={{ mb: 0.0, marginBottom: 3 }} color="text.secondary">
                    Singers: {result.singers}
                </Typography>
                <Typography variant="body2">{result.lyrics}</Typography>

                <Stack sx={{ mt: 2 }} spacing={2}>
                    {result.metaphors.map((metaphor: any, id: any) => (
                        // <Card key={id}>
                        //     {/* <Typography variant="body1">
                        //         <b>Metaphor: </b> {metaphor.metaphor}
                        //     </Typography> */}
                        //     <Typography variant="body1">
                        //         {/* <b>Target: </b>  */}
                        //         {metaphor.source} -- {metaphor.target}
                        //     </Typography>
                        //     {/* <Typography variant="body1">
                        //         <b>Source: </b> {metaphor.source}
                        //     </Typography> */}
                        // </Card>
                        <Typography variant="body1">
                                <b>Metaphor {id+1}: </b> 
                                {metaphor.source} - {metaphor.target}
                            </Typography>
                    ))}
                </Stack>
            </CardContent>
            {/* <CardActions>
                <Button size="small">View</Button>
            </CardActions> */}
        </Card>
    )
}
