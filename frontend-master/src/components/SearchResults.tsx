import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import Box from "@mui/material/Box"
import SearchBox from "./SearchBox"
import SearchResultItem from "./SearchResultItem"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import CircularProgress from "@mui/material/CircularProgress"
import Typography from "@mui/material/Typography"

const SeachResults = () => {
    const [results, setResults] = useState([])
    const [resultDetails, setResultDetails] = useState<any>({})
    const [loading, setLoading] = useState(false)

    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        if (!searchParams.get("query") && !searchParams.get("metaphor")) return
        setLoading(true)
        const controller = new AbortController()
        const body: any = {
            query: searchParams.get("query")||"",
            metaphor: searchParams.get("metaphor"),
        }
        if (
            searchParams.get("filter") &&
            searchParams.get("filter") === "true"
        ) {
            body.filter = true
            body.fields = [...searchParams]
                .filter(
                    (para: any) => para[1] === "true" && para[0] !== "filter"
                )
                .map((para: any) => para[0])
        }
        fetch("http://127.0.0.1:5000/search", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
            signal: controller.signal,
        })
            .then((res) => res.json())
            .then((data: any) => {
                setResults(data.results)
                setResultDetails({
                    total_results: data.total_results,
                    time: data.time,
                })
                setLoading(false)
            })

        return () => {
            controller.abort()
        }
    }, [searchParams])

    return (
        <Container maxWidth="md">
            <Box
            sx={{
                // display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    paddingtop:2,
                    paddingBottom:6,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography
                    sx={{
                        mb: 0.0,
                        fontSize: 50,
                        fontWeight: 800,
                        justifyContent: "center",
                        alignItems: "center",
                    }} color="text.secondary">
                    வைரமுத்து Song Collection
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    paddingBottom:4,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <SearchBox />
            </Box>
        </Box>
            <Box>
                <Typography sx={{ my: 1.5 }} color="text.secondary">
                    Total {`${resultDetails.total_results} results of வைரமுத்து songs in (${
                        resultDetails.time / 1000
                    } seconds)`}
                </Typography>
            </Box>
            <Box py={2}>
                {loading ? (
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: 100,
                        }}
                    >
                        <CircularProgress />
                    </Box>
                ) : (
                    <Stack spacing={2}>
                        {results.map((result: any, id: number) => (
                            <SearchResultItem result={result} key={id} />
                        ))}
                    </Stack>
                )}
            </Box>
        </Container>
    )
}

export default SeachResults
