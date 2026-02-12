<?php

namespace App\Controller;

use App\Entity\CardAnswer;
use App\Repository\CardAnswerRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/api/card/answer', name: 'app_card_answer_')]
final class AnswerCardController extends AbstractController
{
    private CardAnswerRepository $cardAnswerRepository;
    private EntityManagerInterface $entityManager;

    public function __construct(CardAnswerRepository $cardAnswerRepository, EntityManagerInterface $entityManager)
    {
        $this->cardAnswerRepository = $cardAnswerRepository;
        $this->entityManager = $entityManager;
    }

    #[Route('/', name: 'get', methods: ['GET'])]
    public function getAnswer(): JsonResponse
    {
        $answer = $this->cardAnswerRepository->findOneBy([]);

        if (!$answer) {
            return $this->json([
                'answer' => null,
            ], 404);
        }

        return $this->json([
            'id' => $answer->getId(),
            'answer' => $answer->getAnswer(),
        ], 200);
    }

    #[Route('/yes', name: 'save_yes_answer', methods: ['GET'])]
    public function saveAnswer(): JsonResponse
    {
        $cardAnswer = new CardAnswer();
        $cardAnswer->setAnswer('yes');

        $this->entityManager->persist($cardAnswer);
        $this->entityManager->flush();

        return $this->json([
            'id' => $cardAnswer->getId(),
            'answer' => $cardAnswer->getAnswer(),
        ], 201);
    }
}
