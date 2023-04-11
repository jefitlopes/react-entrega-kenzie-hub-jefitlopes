import { LoginHeader } from "./LoginHeader";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { Input } from "../Input";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./formSchema";
import { toast, Toaster } from "react-hot-toast";

formSchema;

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });
  const [response, setResponse] = useState("");
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const submit = async (data) => {
    try {
      const response = await api.post("/sessions", data);
      setResponse(response);
    } catch (err) {
      setResponse(err.response);
      toast.error("Email e/ou Senha errado!");
    }
  };

  useEffect(() => {
    try {
      if (response && response.status === 200) {
        localStorage.setItem("@TOKEN", response.data.token);
        localStorage.setItem("@USERID", response.data.user.id);
        setUser(response.data.user);
        navigate("/");
      }
    } catch (err) {
      toast.error(err.message);
    }
  }, [response, navigate]);

  return (
    <>
      <Toaster position="top-right" reverseOrder={true} />
      <LoginHeader />
      <main>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(submit)}>
          <Input
            type="email"
            id="email"
            label="Email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
          {errors.email ? <p>{errors.email.message}</p> : null}
          <Input
            type="password"
            id="password"
            label="Senha"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          {errors.password ? <p>{errors.password.message}</p> : null}
          <button type="submit">Entrar</button>
        </form>
        <p>Ainda não possui uma conta?</p>
        <button onClick={() => navigate("/register")}>Cadastre-se</button>
      </main>
    </>
  );
};
