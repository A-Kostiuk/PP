import React, { FC } from 'react';
import { BreadcrumbLink, BreadcrumbsList, CurrentLocation, PreviousPage } from './styled';
import Link from 'next/link';
import { SharedSvgIcons } from '../shared-svg-icons/shared-svg-icons';
import { useRouter } from 'next/router';
import { Li } from '../../styled';

interface Props {
  marginBottom?: number;
}

const Breadcrumbs: FC<Props> = ({marginBottom}) => {
  const router = useRouter();

  const breadcrumbs = router.asPath.split('/').filter((element) => element.length > 0);

  const handlePreviousPageClick = () => router.back();

  return (
    <BreadcrumbsList $marginBottom={marginBottom}>
      <Li>
        <PreviousPage onClick={handlePreviousPageClick}>
          <SharedSvgIcons width={20} height={20} id="arrowBack" />
        </PreviousPage>
      </Li>
      {breadcrumbs.map((breadcrumb, index, array) => (
        <Li key={breadcrumb}>
          {
            index === (array.length - 1) ?
              <CurrentLocation>{breadcrumb}</CurrentLocation> :
              <Link href={`/${breadcrumb}`}>
                <BreadcrumbLink>{breadcrumb}</BreadcrumbLink>
              </Link>
          }
        </Li>))}
    </BreadcrumbsList>
  );
};

export default Breadcrumbs;
