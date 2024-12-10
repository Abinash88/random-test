export type _LayoutProps = {
  children: React.ReactNode;
  // params: { locale?: string };
};

export type _Params = {
  params: {
    [key: string]: string;
  };
};

export type _Query = {
  searchParams: {
    [key: string]: string;
  };
};

export type TModalVariant = "form" | "warning" | "default" | "no-exit";
