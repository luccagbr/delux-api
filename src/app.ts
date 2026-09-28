import "dotenv/config";
import app from "./index";

const init = () => {
    const port = Number(process.env.PORT) || 8000;

    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
};

init();
