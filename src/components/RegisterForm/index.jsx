import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterHeader } from "./RegisterHeader";
import { formSchema } from "./formSchema";
import { Input } from "../fragments/Input";
import { Select } from "../fragments/Select";
import { StyledRegisterForm } from "./style";

export const RegisterForm = () => {
  const { handleRegister, Navigate } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  if (localStorage.getItem("@TOKEN")) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Toaster position="top-right" reverseOrder={true} />
      <RegisterHeader />
      <StyledRegisterForm>
        <section>
          <h1>Crie sua conta</h1>
          <p>Rápido e grátis, vamos nessa</p>
          <form onSubmit={handleSubmit(handleRegister)}>
            <Input
              type="text"
              id="name"
              label="Nome"
              placeholder="Digite aqui seu nome"
              {...register("name")}
            />
            {errors.name ? <p>{errors.name.message}</p> : null}
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
            <Input
              type="password"
              id="confirm"
              label="Confirmar Senha"
              placeholder="Digite novamente sua senha"
              {...register("confirm")}
            />
            {errors.confirm ? <p>{errors.confirm.message}</p> : null}
            <Input
              type="text"
              id="bio"
              label="Bio"
              placeholder="Fale sobre você"
              {...register("bio")}
            />
            {errors.bio ? <p>{errors.bio.message}</p> : null}
            <Input
              type="text"
              id="contact"
              label="Contato"
              placeholder="Opção de contato"
              {...register("contact")}
            />
            {errors.contact ? <p>{errors.contact.message}</p> : null}
            <Select
              id="course_module"
              label="Selecione o módulo"
              {...register("course_module")}
            />
            {errors.course_module ? (
              <p>{errors.course_module.message}</p>
            ) : null}
            <button type="submit">Cadastrar</button>
          </form>
        </section>
      </StyledRegisterForm>
    </>
  );
};
