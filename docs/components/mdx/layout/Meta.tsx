import React, {useMemo} from 'react';
import Head from 'next/head';

export interface Meta {
   title: string;
   description: string;
}

export interface LayoutProps {
   meta: Meta;
   getStaticProps?: any;
}

const toCapitalize = (name: string) => {
   // @ts-ignore
   const [first, ...rest] = name;
   return `${first.toUpperCase()}${rest.join('')}`;
};

const Meta: React.FC<React.PropsWithChildren<LayoutProps>> = React.memo(
   ({meta}) => {
      const capitalizeTitle = useMemo(() => {
         if (!meta.title) return '';
         if (meta.title.toLowerCase().startsWith('use'))
            return `${meta.title} - `;
         return `${toCapitalize(meta.title)} |  Ripple UI`;
      }, [meta.title]);
      return (
         <Head>
            <title>{capitalizeTitle}</title>
            <meta name="title" content={capitalizeTitle} />
            <meta name="description" content={meta.description} />
         </Head>
      );
   }
);

Meta.displayName = 'Layout';
export default Meta;
