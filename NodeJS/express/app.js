const express = require("express");
// routers
const authRouter = require("./routes/authRoutes");
const userRouter = require("./routes/userRoutes");

const notFoundMiddleware = require("./middleware/not-found");
const app = express();

app.use(express.static("./public"));
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);
app.use(notFoundMiddleware);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`服务启动成功，端口：${port}`);
});
