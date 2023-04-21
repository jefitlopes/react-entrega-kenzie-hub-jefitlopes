import { LoginHeader } from "./LoginHeader";
import { useForm } from "react-hook-form";
import { useContext } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./formSchema";
import { Toaster } from "react-hot-toast";
import { StyledLoginForm } from "./style";
import { UserContext } from "../../providers/UserContext";
import { Input } from "../fragments/Input";

export const LoginForm = () => {
  const { user, Navigate, submit, navigate } = useContext(UserContext);

  if (localStorage.getItem("@TOKEN")) {
    return <Navigate to="/" />;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  return (
    <>
      <Toaster position="top-right" reverseOrder={true} />
      <LoginHeader />
      <StyledLoginForm>
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
      </StyledLoginForm>
    </>
  );
};
