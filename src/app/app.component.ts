import { Component } from '@angular/core';
import {ModEntry} from './mod/ModEntry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mods = [
    new ModEntry({
      name: 'bspkrsCore',
      link: 'http://www.minecraftforum.net/topic/1114612-/',
      author: 'DaftPVF'
    }),
    new ModEntry({
      name: 'TreeCapitator',
      link: 'http://www.minecraftforum.net/topic/1009577-/',
      author: 'DaftPVF'
    }),
    new ModEntry({
      name: 'AppleSkin',
      link: 'https://www.curseforge.com/minecraft/mc-mods/appleskin',
      author: 'squeek'
    }),
    new ModEntry({
      name: 'Atomic Science',
      link: 'https://minecraft.curseforge.com/projects/atomic-science',
      author: 'DarkCow aka DarkGuardsman'
    }),
    new ModEntry({
      name: 'Beer Brewing Simulator',
      link: 'https://github.com/rafacost/bbs_mod',
      author: 'rafacost3d'
    }),
    new ModEntry({
      name: 'BC eXtra Pipes',
      link: 'https://www.curseforge.com/minecraft/mc-mods/bc-extra-pipes',
      author: 'Face_of_Cat'
    }),
    new ModEntry({
      name: 'BiblioCraft',
      link: 'http://www.bibliocraftmod.com',
      author: 'Joseph \'Nuchaz\' Sinclair'
    }),
    new ModEntry({
      name: 'Biomes O\' Plenty',
      link: 'http://mods.curse.com/mc-mods/minecraft/220318-biomes-o-plenty',
      author: 'Adubbz'
    }),
    new ModEntry({
      name: 'BuildCraft Lib',
      link: 'http://www.mod-buildcraft.com/',
      author: 'SpaceToad'
    }),
    new ModEntry({
      name: 'BuildCraft',
      link: 'http://www.mod-buildcraft.com/',
      author: 'BuildCraft Team'
    }),
    new ModEntry({
      name: 'BuildCraft Builders',
      link: 'http://www.mod-buildcraft.com/',
      author: 'SpaceToad'
    }),
    new ModEntry({
      name: 'BuildCraft Energy',
      link: 'http://www.mod-buildcraft.com/',
      author: 'BuildCraft Team'
    }),
    new ModEntry({
      name: 'BuildCraft Factory',
      link: 'http://www.mod-buildcraft.com/',
      author: 'SpaceToad'
    }),
    new ModEntry({
      name: 'BuildCraft Silicon',
      link: 'http://www.mod-buildcraft.com/',
      author: 'BuildCraft Team'
    }),
    new ModEntry({
      name: 'BuildCraft Transport',
      link: 'http://www.mod-buildcraft.com/',
      author: 'SpaceToad'
    }),
    new ModEntry({
      name: 'BuildCraft Robotics',
      link: 'http://www.mod-buildcraft.com/',
      author: 'BuildCraft Team'
    }),
    new ModEntry({
      name: 'BuildCraft Compat',
      link: 'http://www.mod-buildcraft.com/',
      author: 'SpaceToad'
    }),
    new ModEntry({
      name: 'Building Gadgets',
      link: 'https://minecraft.curseforge.com/projects/building-gadgets',
      author: 'Direwolf20'
    }),
    new ModEntry({
      name: 'CC: Tweaked',
      link: 'https://github.com/SquidDev-CC/CC-Tweaked',
      author: 'Daniel Ratcliffe'
    }),
    new ModEntry({
      name: 'CC: Tweaked',
      link: 'https://www.curseforge.com/minecraft/mc-mods/cc-tweaked',
      author: 'Aaron Mills'
    }),
    new ModEntry({
      name: 'CodeChicken Lib',
      link: 'http://chickenbones.net/Pages/links.html',
      author: 'ChickenBones'
    }),
    new ModEntry({
      name: 'CoFH Core',
      link: 'http://www.teamcofh.com',
      author: 'Team CoFH'
    }),
    new ModEntry({
      name: 'CoFH World',
      link: 'http://www.teamcofh.com',
      author: 'Team CoFH'
    }),
    new ModEntry({
      name: 'Cooking for Blockheads',
      link: 'https://www.curseforge.com/minecraft/mc-mods/cooking-for-blockheads',
      author: 'BlayTheNinth'
    }),
    new ModEntry({
      name: 'Energy Converters',
      link: 'https://github.com/Xalcon/EnergyConverters',
      author: 'xalcon'
    }),
    new ModEntry({
      name: 'Extreme Reactors',
      link: 'http://zerono.it/extreme-reactors',
      author: 'ErogenousBeef'
    }),
    new ModEntry({
      name: 'FastFurnace',
      link: '',
      author: 'Shadows_of_Fire'
    }),
    new ModEntry({
      name: 'FastWorkbench',
      link: '',
      author: 'Shadows_of_Fire'
    }),
    new ModEntry({
      name: 'Flux Networks',
      link: '',
      author: 'BloCamLimb'
    }),
    new ModEntry({
      name: 'Forestry',
      link: 'http://forestry.sengir.net/',
      author: 'SirSengir'
    }),
    new ModEntry({
      name: 'Shadowfacts\' Forgelin',
      link: 'https://github.com/shadowfacts/Forgelin',
      author: 'shadowfacts'
    }),
    new ModEntry({
      name: 'Waila',
      link: '',
      author: 'ProfMobius'
    }),
    new ModEntry({
      name: 'IndustrialCraft 2',
      link: 'http://www.industrial-craft.net',
      author: 'Alblaka'
    }),
    new ModEntry({
      name: 'Industrial Foregoing',
      link: 'https://minecraft.curseforge.com/projects/industrial-foregoing',
      author: 'Buuz135'
    }),
    new ModEntry({
      name: 'Inventory Tweaks',
      link: 'https://github.com/Kobata/inventory-tweaks',
      author: ', '
    }),
    new ModEntry({
      name: 'Just Enough Items',
      link: 'https://github.com/mezz/JustEnoughItems',
      author: 'mezz'
    }),
    new ModEntry({
      name: 'McJtyLib',
      link: '',
      author: 'McJty'
    }),
    new ModEntry({
      name: 'Morpheus',
      link: 'http://www.curse.com/mc-mods/Minecraft/morpheus',
      author: 'Quetzi'
    }),
    new ModEntry({
      name: 'Mystcraft',
      link: 'http://xcompwiz.com',
      author: ', '
    }),
    new ModEntry({
      name: 'Neat',
      link: 'http://www.vazkii.us',
      author: 'Vazkii'
    }),
    new ModEntry({
      name: 'Netherending Ores',
      link: 'https://minecraft.curseforge.com/projects/netherending-ores/',
      author: 'ICannt Team'
    }),
    new ModEntry({
      name: 'QuantumStorage',
      link: '',
      author: 'Gigabit101'
    }),
    new ModEntry({
      name: 'Reborn Core',
      link: 'https://github.com/TechReborn/RebornCore',
      author: 'modmuss50'
    }),
    new ModEntry({
      name: 'Redstone Flux',
      link: 'http://www.teamcofh.com',
      author: 'Team CoFH'
    }),
    new ModEntry({
      name: 'Refined Storage',
      link: 'https://refinedstorage.raoulvdberge.com',
      author: 'Refined Storage contributors'
    }),
    new ModEntry({
      name: 'RFTools',
      link: '',
      author: 'McJty'
    }),
    new ModEntry({
      name: 'RFTools Control',
      link: '',
      author: 'McJty'
    }),
    new ModEntry({
      name: 'RFTools Dimensions',
      link: '',
      author: 'McJty'
    }),
    new ModEntry({
      name: 'Serene Seasons',
      link: 'null',
      author: 'Adubbz'
    }),
    new ModEntry({
      name: 'TESLA',
      link: '',
      author: 'Darkhax'
    }),
    new ModEntry({
      name: 'Tesla Core Lib',
      link: '',
      author: 'Face_of_Cat'
    }),
    new ModEntry({
      name: 'Tesla Core Lib Registries',
      link: '',
      author: 'Face_of_Cat'
    }),
    new ModEntry({
      name: 'Thermal Cultivation',
      link: 'http://www.teamcofh.com',
      author: 'Team CoFH'
    }),
    new ModEntry({
      name: 'Thermal Dynamics',
      link: 'http://www.teamcofh.com',
      author: 'Team CoFH'
    }),
    new ModEntry({
      name: 'Thermal Expansion',
      link: 'http://www.teamcofh.com',
      author: 'Team CoFH'
    }),
    new ModEntry({
      name: 'Thermal Foundation',
      link: 'http://www.teamcofh.com',
      author: 'Team CoFH'
    }),
    new ModEntry({
      name: 'Thermal Innovation',
      link: 'http://www.teamcofh.com',
      author: 'Team CoFH'
    }),
    new ModEntry({
      name: 'What Are We Looking At',
      link: 'https://minecraft.curseforge.com/projects/wawla-what-are-we-looking-at',
      author: 'Darkhax'
    }),
    new ModEntry({
      name: 'Xaero\'s Minimap',
      link: '',
      author: 'Xaero96'
    }),
    new ModEntry({
      name: 'Zero CORE',
      link: 'http://zerono.it/',
      author: 'ZeroNoRyouki'
    }),
  ]
}
