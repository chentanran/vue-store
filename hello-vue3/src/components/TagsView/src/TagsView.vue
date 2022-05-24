<template>
	
</template>

<script setup lang="ts">
import { onMounted, watch, computed, unref, ref, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import type { RouteLocationNormalizedLoaded, RouterLinkProps } from 'vue-router'
import { usePermissionStore } from '@/store/modules/premission'
import { useTagsViewStore } from '@/store/modules/tagsView'
import { useAppStore } from '@/store/modules/app'
import { useI18n } from '@/hooks/web/useI18n'
import { filterAffixTags } from './helper'
import {  } from '@/components/ContextMenu'
</script>

<style>

</style>