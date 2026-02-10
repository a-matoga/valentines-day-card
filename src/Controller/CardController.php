<?php

namespace App\Controller;

use App\Entity\Card;
use App\Entity\Token;
use App\Repository\TokenRepository;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/card', name: 'app_card_')]
final class CardController extends AbstractController
{
    private const TOKEN_LENGTH = 64;
    private $tokenRepository;

    public function __construct(TokenRepository $tokenRepository)
    {
        $this->tokenRepository = $tokenRepository;
    }

    #[Route('/card/{urlToken}', name: 'get_content', methods: ['GET'])]
    public function index($urlToken): JsonResponse
    {
        if (strlen($urlToken) !== self::TOKEN_LENGTH) {
            throw new HttpException(
                403,
                'Nieprawidłowy format tokenu'
            );
        }

        $token = $this->tokenRepository->findValid($urlToken);

        if (!$token) {
            throw new HttpException(
                403,
                'Nieprawidłowy lub wygasły token dla karty'
            );
        }

        $card = $token ? $token->getCard() : null;

        if (!$card) {
            throw new HttpException(
                404,
                'Nie znaleziono karty dla podanego tokenu'
            );
        }

        return $this->json([
            'data' => [
                'name' => $card->getName(),
                'content' => $card->getContent(),
            ]
        ], 200);
    }
}
