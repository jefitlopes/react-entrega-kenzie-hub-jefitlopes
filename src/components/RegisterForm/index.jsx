import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import toast, { Toaster } from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterHeader } from "./RegisterHeader";
import { formSchema } from "./formSchema";
import { Input } from "../Input";
import { Select } from "../Select";
import { StyledRegisterForm } from "./style";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const navigate = useNavigate();

  const handleRegister = async (data) => {
    try {
      await api.post("/users", data);
      toast.success("Conta criada com sucesso!");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      toast.error("Ops! Algo deu errado!");
    }
  };

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
