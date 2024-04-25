import { CardWrapper } from "@/components/auth/card-wrapper";

type Props = {};
export const LoginForm = ({}: Props) => {
  return (
    <CardWrapper
      headerLabel="Welcome Back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      Login Form!
    </CardWrapper>
  );
};
