import type { RouteMeta } from 'vue-router'
import { ref, unref } from 'vue'
import { findPath } from '@/utils/tree'

type OnlyOneChildType = AppRouteRecordRaw & { noShowingChildren?: boolean }

interface HasOneShowingChild {
	oneShowingChild?: boolean
	onlyOneChild?: OnlyOneChildType
}

