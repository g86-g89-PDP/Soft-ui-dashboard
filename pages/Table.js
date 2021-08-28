import TableWrapper from '../styles/TableWrapper';
import { Avatar, ListItem, ListItemAvatar, ListItemText, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core"
import MAN from '../public/img/MAN.jpg'
import ustoz from '../public/img/ustoz.jpg'
import samandar from '../public/img/samandar.jpg'
import yaki from '../public/img/yaki.jpg'
import user from '../public/img/user.jpg'

const table = [
    {
        username: "Abdurakhmonov Abdulaziz",
        image: "/img/MAN.jpg",
        email: "@Abdulazizfit",
        work: "Programer",
        organ: "Developer",
        date: "23/04/20",
        status: true,
        Edit: "Edit",
    },
    {
        username: "Abdulaziz Ochilov",
        image: "/img/ustoz.jpg",
        email: "@AbdulazizOchilov",
        work: "Manager",
        organ: "Leader",
        date: "23/04/15",
        status: true,
        Edit: "Edit",
    },
    {
        username: "Samandar Odilboyev",
        image: "/img/samandar.jpg",
        email: "@webius_dev",
        work: "Programer",
        organ: "Developer",
        date: "23/04/20",
        status: false,
        Edit: "Edit",
    },
    {
        username: "Saida'lo ",
        image: "/img/yaki.jpg",
        email: "@YaKI01",
        work: "Programer",
        organ: "Developer",
        date: "23/04/20",
        status: false,
        Edit: "Edit",
    },
    {
        username: "Begzod ",
        image: "/img/user.jpg",
        email: "@sssssss_1234567",
        work: "Programer",
        organ: "Developer",
        date: "23/04/20",
        status: true,
        Edit: "Edit",
    },
    {
        username: "Jamshid Yakubov",
        image: "/img/user.jpg",
        email: "@Yakubov808",
        work: "Programer",
        organ: "Developer",
        date: "23/04/20",
        status: false,
        Edit: "Edit",
    }
]

const Date = () => {
    return (

        <TableWrapper className="container-fluid p-4">
            <h2>Authors table</h2>
            <TableHead>
                <TableRow className="m-4">
                    <TableCell>AUTHOR</TableCell>
                    <TableCell className="tablecel2">FUNCTION </TableCell>
                    <TableCell className="tablecel3">  STATUS </TableCell>
                    <TableCell className="tablecel4">  EMPLOYED </TableCell>
                </TableRow>

            </TableHead>
            <TableBody>
                {table?.map((v, i) => (
                    <TableRow key={i}>
                        <TableCell>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar src={`${v.image}`} />
                                </ListItemAvatar>
                                <ListItemText className="text1" primary={v.username} secondary={v.email} />
                            </ListItem>
                        </TableCell>
                        <TableCell>
                            <ListItem>
                                <ListItemText primary={v.work} secondary={v.organ}></ListItemText>
                            </ListItem>
                        </TableCell>
                        <TableCell>
                            <ListItemText className={`${v.status ? "status" : "offline"} fs-4`}>{v.status ? "Online" : "Ofline"}</ListItemText>
                        </TableCell>
                        <TableCell>
                            <ListItemText>{v.date}</ListItemText>
                        </TableCell>
                        <TableCell>
                            <ListItem>
                                <ListItemText secondary={v.Edit}></ListItemText>
                            </ListItem>
                        </TableCell>

                    </TableRow>
                ))}
            </TableBody>

        </TableWrapper>
    )
}

export default Date;