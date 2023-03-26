import { useState } from "react";
import {
	ListItem,
	ListItemText,
	IconButton,
	Typography,
	Avatar,
	ListItemAvatar,
	LinearProgress,
	Paper,
	Box,
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";

const FileItem = ({ file }) => {
	const [isUploading, setUploading] = useState(true);
	return (
		<>
			<ListItem>
				<ListItemAvatar>
					<Avatar
						variant='square'
						sx={{
							bgcolor: "white",
							padding: 0.5,
						}}
					>
						{(() => {
							const ext = file.name.split(".").pop()?.toUpperCase();
							return (
								<Typography color={ext === "PDF" ? "error" : "primary"}>
									{ext}
								</Typography>
							);
						})()}
					</Avatar>
				</ListItemAvatar>
				<ListItemText
					sx={{ overflow: "hidden" }}
					primary={<Typography noWrap>{file.name}</Typography>}
					secondary={
						<Typography noWrap>
							{(Math.round((file.size / 1024) * 100) / 100).toFixed(2)} KiB
						</Typography>
					}
				/>

				<IconButton>
					<PauseCircleIcon />
				</IconButton>
				<IconButton onClick={() => setUploading((su) => !su)}>
					<HighlightOffIcon color='error' />
				</IconButton>
			</ListItem>

			<LinearProgress sx={{ opacity: isUploading ? 1 : 0 }} />
		</>
	);
};

FileItem.propTypes = {
	file: File,
};

export default FileItem;
