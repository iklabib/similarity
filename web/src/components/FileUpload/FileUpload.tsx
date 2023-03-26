import { useState } from "react";
import {
	Button,
	List,
	IconButton,
	Typography,
	Stack,
	Avatar,
	Snackbar,
	Box,
	Container,
	Alert,
} from "@mui/material";
import FileItem from "./FileItem";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const FileUpload = () => {
	const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
	const [uploadDone, setUploadDone] = useState(false);
	const [fileUploadWarning, setFileWarning] = useState(false);

	const onFilesChange = (fileList: FileList | null) => {
		if (!fileList) return;
		const files: File[] = [];
		for (const file of fileList) {
			files.push(file);
		}
		if (selectedFiles.length + files.length > 5) {
			setFileWarning(true);
			return;
		}
		setSelectedFiles((sf) => [...sf, ...files]);
		setUploadDone(false);
	};

	return (
		<Stack>
			<List>
				{selectedFiles.map((file) => (
					<FileItem file={file} />
				))}
			</List>
			<Stack
				display={selectedFiles.length === 0 ? "block" : "none"}
				direction='column'
				spacing={1}
			>
				<Typography variant="h6" align='center'>
					Upload
				</Typography>

				<Box
					display='flex'
					flexDirection={"row"}
					justifyContent={"center"}
					alignContent={"center"}
					justifyItems={"center"}
				>
					<CloudUploadIcon sx={{ fontSize: 48, opacity: 0.8 }} />
				</Box>
				<Typography variant="subtitle2" align='center'>
					Maximum 5 Files and 20 MiB each
				</Typography>
				<Typography variant="subtitle2" align='center'>
					(PDF or DOCX)
				</Typography>
				{selectedFiles.map((file) => (
					<FileItem file={file} />
				))}
			</Stack>
			<Stack
				direction='row'
				alignItems='center'
				justifyContent='center'
				spacing={1}
			>
				<Button
					variant='outlined'
					startIcon={<AttachFileIcon />}
					disabled={selectedFiles.length >= 5}
					component='label'
					// sx={{ marginRight: 1 }}
				>
					Add Files
					<input
						type="file"
						multiple
						hidden
						accept="application/pdf;application/vnd.openxmlformats-officedocument.wordprocessingml.document;"
						onChange={(e) => onFilesChange(e?.target?.files)}
					/>
				</Button>
				<Button
					variant='contained'
					startIcon={<ArrowForwardIcon />}
					disabled={!uploadDone && selectedFiles.length < 2}
				>
					Proceed
				</Button>
			</Stack>

			<Snackbar
				open={fileUploadWarning}
				onClose={() => setFileWarning(false)}
				autoHideDuration={6000}
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
			>
				<Alert severity="warning">Maximum 5 Files and 20 MiB each</Alert>
			</Snackbar>
		</Stack>
	);
};
