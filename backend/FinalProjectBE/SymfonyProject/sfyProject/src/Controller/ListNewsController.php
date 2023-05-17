<?php

namespace App\Controller;

use App\Entity\News;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

class ListNewsController extends AbstractController
{
    public function myAction()
    {
        // ...

        $response = new Response();
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $response->headers->set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

        // ...

        return $response;
    }
    /* test with http://localhost:8000/list/news (working) */
    #[Route('/list/news', name: 'list_news', methods: ['GET'])]
    public function list(EntityManagerInterface $entityManager): JsonResponse
    {
        $results = $entityManager->getRepository(News::class)->findAll();
        $data = [];
        foreach ($results as $new) {
            $data[] = [
                'id' => $new->getId(),
                'title' => $new->getTitle(),
                'description' => $new->getDescription(),
                'originalNewUrl' => $new->getOriginalNewUrl(),
                'image' => $new->getImage(),
            ];
        }
        return $this->json($data);
    }
}
