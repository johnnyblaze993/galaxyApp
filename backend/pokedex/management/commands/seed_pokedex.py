from django.core.management.base import BaseCommand
from pokedex.models import Type, Move, Pokemon, PokemonType, PokemonMove, Evolution

class Command(BaseCommand):
    help = "Seeds the database with initial pokedex data"

    def handle(self, *args, **kwargs):
        # Example: Wipe all data first (careful in prod!)
        Type.objects.all().delete()
        Move.objects.all().delete()
        Pokemon.objects.all().delete()
        Evolution.objects.all().delete()

        # 1. Create types
        grass = Type.objects.create(name="Grass")
        fire = Type.objects.create(name="Fire")
        water = Type.objects.create(name="Water")
        electric = Type.objects.create(name="Electric")

        # 2. Create moves
        vine_whip = Move.objects.create(name="Vine Whip", power=45, accuracy=1.0, type=grass)
        ember = Move.objects.create(name="Ember", power=40, accuracy=1.0, type=fire)
        water_gun = Move.objects.create(name="Water Gun", power=40, accuracy=1.0, type=water)
        # thunder_shock = Move.objects.create(name="Thunder Shock", power=40, accuracy=1.0, type=electric)

        # 3. Create pokemon
        bulbasaur = Pokemon.objects.create(
            name="Bulbasaur", pokedex_num=1, does_evolve=True,
            height=0.7, weight=6.9, base_stats={"hp": 45, "atk": 49, "def": 49},
            description="A strange seed was planted on its back at birth."
        )
        charmander = Pokemon.objects.create(
            name="Charmander", pokedex_num=4, does_evolve=True,
            height=0.6, weight=8.5, base_stats={"hp": 39, "atk": 52, "def": 43},
            description="Obviously prefers hot places."
        )
        squirtle = Pokemon.objects.create(
            name="Squirtle", pokedex_num=7, does_evolve=True,
            height=0.5, weight=9.0, base_stats={"hp": 44, "atk": 48, "def": 65},
            description="After birth, its back swells and hardens into a shell."
        )
        # pikachu = Pokemon.objects.create(
        #     name="Pikachu", pokedex_num=25, does_evolve=True,
        #     height=0.4, weight=6.0, base_stats={"hp": 35, "atk": 55, "def": 40},
        #     description="When several of these Pokémon gather, their electricity could build and cause lightning storms."
        # )

        # 4. Set up ManyToMany relationships
        bulbasaur.types.add(grass)
        charmander.types.add(fire)
        squirtle.types.add(water)
        # pikachu.types.add(electric)

        bulbasaur.moves.add(vine_whip)
        charmander.moves.add(ember)
        squirtle.moves.add(water_gun)
        # pikachu.moves.add(thunder_shock)

        # 5. Evolutions
        # You can add sample evolutions here if you like

        self.stdout.write(self.style.SUCCESS("Seeded pokedex data!"))
