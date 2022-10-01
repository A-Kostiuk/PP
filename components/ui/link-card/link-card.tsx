import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';
import { Card, Title } from './styled';
import { useRouter } from 'next/router';

interface Props {
  title: string;
  path: string;
  image: string;
}

const LinkCard: FC<Props> = ({image, title, path}) => {
  const router = useRouter();
  const [active, setActive] = useState(false);
  useEffect(() => {
    const activePathName = router.pathname.toLowerCase();
    const currentName = title.toLowerCase();
    setActive(activePathName.includes(currentName));
  }, [title, router]);

  return (
    <Link href={path}>
      <Card $image={image} $title={title} $isActive={active}>
        <Title>{title}</Title>
      </Card>
    </Link>
  );
};

export default LinkCard;
