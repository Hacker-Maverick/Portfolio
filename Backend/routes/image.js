import { Router } from "express";
import path from 'path';
import  {fileURLToPath} from 'url'

const router = Router();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Route to get image
router.get('/image/:filename', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../uploads', req.params.filename));
});

export default router;