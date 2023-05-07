export interface CartAddMutationType {
  addToCart: {
    deviceLeft: number
  }
}

export interface CartRemoveMutationType {
  removeFromCart: {
    deviceLeft: number
  }
}