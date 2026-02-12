<?php

namespace App\Entity;

use App\Repository\CardRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

//WIP

#[ORM\Entity(repositoryClass: CardRepository::class)]
class Card
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column]
    private array $content = [];

    /**
     * @var Collection<int, Token>
     */
    #[ORM\OneToMany(targetEntity: Token::class, mappedBy: 'card')]
    private Collection $token;

    #[ORM\ManyToOne(inversedBy: 'cards')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Template $template = null;

    public function __construct()
    {
        $this->token = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getContent(): array
    {
        return $this->content;
    }

    public function setContent(array $content): static
    {
        $this->content = $content;

        return $this;
    }

    /**
     * @return Collection<int, Token>
     */
    public function getToken(): Collection
    {
        return $this->token;
    }

    public function addToken(Token $token): static
    {
        if (!$this->token->contains($token)) {
            $this->token->add($token);
            $token->setCard($this);
        }

        return $this;
    }

    public function removeToken(Token $token): static
    {
        if ($this->token->removeElement($token)) {
            // set the owning side to null (unless already changed)
            if ($token->getCard() === $this) {
                $token->setCard(null);
            }
        }

        return $this;
    }

    public function getTemplate(): ?Template
    {
        return $this->template;
    }

    public function setTemplate(?Template $template): static
    {
        $this->template = $template;

        return $this;
    }
}
