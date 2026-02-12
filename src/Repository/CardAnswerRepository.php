<?php

namespace App\Repository;

use App\Entity\CardAnswer;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<CardAnswer>
 */
class CardAnswerRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CardAnswer::class);
    }

    public function findFirst(): ?CardAnswer
    {
        return $this->createQueryBuilder('c')
            ->orderBy('c.createdAt', 'ASC')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }

    //    /**
    //     * @return CardAnswer[] Returns an array of CardAnswer objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('c')
    //            ->andWhere('c.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('c.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?CardAnswer
    //    {
    //        return $this->createQueryBuilder('c')
    //            ->andWhere('c.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
