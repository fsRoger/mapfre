// components/LoginForm.tsx

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signIn } from "next-auth/react";

const schema = z.object({
  email: z
    .string()
    .email("Digite um e-mail válido")
    .min(1, "Campo obrigatório"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

type LoginFormInputs = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });
      // Sucesso ao fazer login, você pode redirecionar ou executar outras ações aqui
      console.log("Login bem-sucedido!");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-8">
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          E-mail
        </label>
        <input
          {...register("email")}
          type="email"
          id="email"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.email ? "border-red-500" : ""
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-xs italic">{errors.email.message}</p>
        )}
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Senha
        </label>
        <input
          {...register("password")}
          type="password"
          id="password"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.password ? "border-red-500" : ""
          }`}
        />
        {errors.password && (
          <p className="text-red-500 text-xs italic">
            {errors.password.message}
          </p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Entrar
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
